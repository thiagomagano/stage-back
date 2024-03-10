import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentService } from './department.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Department } from './department.entity';
import { Repository } from 'typeorm';

const oneDepartment = {
  title: 'Department Title #1'
};

const departmentArray = [
  {
    title: 'Department Title #1'
  },
  {
    title: 'Department Title #2'
  },
  {
    title: 'Department Title #3'
  }
];

describe('DepartmentService', () => {
  let service: DepartmentService;
  let repository: Repository<Department>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [
        DepartmentService,
        {
          provide: getRepositoryToken(Department),
          useValue: {
            save: jest.fn().mockResolvedValue(oneDepartment),
            find: jest.fn().mockResolvedValue(departmentArray),
            findOneBy: jest.fn().mockResolvedValue(oneDepartment),
            remove: jest.fn(),
            delete: jest.fn(),
            update: jest
              .fn()
              .mockResolvedValue({ title: 'New Department title' })
          }
        }
      ]
    }).compile();

    service = module.get<DepartmentService>(DepartmentService);
    repository = module.get<Repository<Department>>(
      getRepositoryToken(Department)
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should successfully insert a department', () => {
      const oneDepartment = {
        title: 'Department Title #1'
      };
      expect(
        service.create({
          title: 'Department Title #1'
        })
      ).resolves.toEqual(oneDepartment);
    });
  });

  describe('findAll()', () => {
    it('should successfully show all departments ', async () => {
      const departments = await service.findAll();
      expect(departments).toEqual(departmentArray);
    });
  });

  describe('FindOneById', () => {
    it('should successfully find a department given a valid id ', async () => {
      const oneDepartment = await service.findOne(1);

      expect(oneDepartment).toEqual(oneDepartment);
    });
  });

  describe('remove()', () => {
    it('should call remove with the passed value', async () => {
      const removeSpy = jest.spyOn(repository, 'delete');
      const retVal = await service.remove('2');
      expect(removeSpy).toHaveBeenCalledWith('2');
      expect(retVal).toBeUndefined();
    });
  });

  describe('update()', () => {
    it('Should update a department given a id: ', async () => {
      const updateData = { title: 'New Department Title' };

      const updateSpy = jest
        .spyOn(repository, 'update')
        .mockRejectedValue(true);

      const updated = await service.update(1, updateData);

      expect(updateSpy).toHaveBeenCalledWith(1, updateData);
      //TODO Reescrever
      //expect(updateData).resolves.toEqual(updatedDepartment);
    });
  });
});
