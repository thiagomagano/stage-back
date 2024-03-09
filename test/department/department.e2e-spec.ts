import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { DepartmentModule } from '../../src/department/department.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentDto } from '../../src/department/dto/departmentDto';
import { AppModule } from '../../src/app.module';

describe('Department - /department (e2e)', () => {
  const department = {
    id: 1,
    title: 'New Department #1'
  };

  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3307,
          username: 'root',
          password: 'mysql',
          database: 'test',
          autoLoadEntities: true,
          synchronize: true
        }),
        DepartmentModule,
        AppModule
      ]
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Create [POST /department]', async () => {
    return request(app.getHttpServer())
      .post('/department')
      .send(department as DepartmentDto)
      .expect(201)
      .then(({ body }) => {
        expect(body).toEqual(department);
      });
  });

  it('Get all departments [GET /department]', async () => {
    return request(app.getHttpServer())
      .get('/department')
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeDefined();
      });
  });

  it('Get one department [GET /department/:id]', () => {
    return request(app.getHttpServer())
      .get('/department/1')
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeDefined();
      });
  });

  it('Delete one department [DELETE /department/:id]', () => {
    return request(app.getHttpServer()).delete('/department/1').expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
