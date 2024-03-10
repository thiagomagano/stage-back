import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentController } from '../department.controller';
import { DepartmentService } from '../department.service';
import { DepartmentDto } from '../dto/departmentDto';

const departmentDto: DepartmentDto = {
  title: 'New Tittle'
};

describe('DepartmentController', () => {
  let controller: DepartmentController;
  let service: DepartmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentController],
      //providers: [DepartmentService]
      providers: [
        DepartmentService,
        {
          provide: DepartmentService,
          useValue: {
            create: jest
              .fn()
              .mockResolvedValue((department: DepartmentDto) =>
                Promise.resolve({ id: 1, ...department })
              ),
            findAll: jest
              .fn()
              .mockResolvedValue([
                { title: 'New Department # 1' },
                { title: 'New Department # 2' }
              ]),
            findOne: jest.fn().mockImplementation((id: number) =>
              Promise.resolve({
                title: 'New Department # 1',
                id
              })
            ),
            remove: jest.fn()
          }
        }
      ]
    }).compile();

    controller = module.get<DepartmentController>(DepartmentController);
    service = module.get<DepartmentService>(DepartmentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {
    it('should create a department', () => {
      controller.create(departmentDto);
      expect(service.create).toHaveBeenCalledWith(departmentDto);
    });
  });

  describe('findAll', () => {
    it('should find departments', () => {
      controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
    });
  });
  describe('findOneById()', () => {
    it('should find a department', () => {
      expect(controller.findOneById(1)).resolves.toEqual({
        title: 'New Department # 1',
        id: 1
      });
      expect(service.findOne).toHaveBeenCalled();
    });
  });

  describe('remove()', () => {
    it('should remove the department', () => {
      controller.remove('2');
      expect(service.remove).toHaveBeenCalled();
    });
  });
});
