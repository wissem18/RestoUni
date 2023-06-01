import {Inject, Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {VoteStudent} from "./entities/vote-student.entity";
import {StudentService} from "../student/student.service";
import {VoteService} from "../vote/vote.service";
import {OptionService} from "../option/option.service";

@Injectable()
export class VoteStudentService {

  constructor(
      @InjectRepository(VoteStudent)
      private readonly VoteStudentRepository: Repository<VoteStudent>,
      @Inject(StudentService)
      private readonly StudentService: StudentService,
  @Inject(VoteService)
private readonly VoteService: VoteService,
      @Inject(OptionService)
        private readonly OptionService: OptionService
) {}

  create(voteId:string,studentId:string,optionId:string,restaurantID : string): Promise<VoteStudent> {
    return this.StudentService.findOne(studentId,restaurantID ).then((student) => {
        if(!student) {
            throw new NotFoundException("Student not found");
        }
        console.log(student);
        return this.VoteService.findOne(voteId).then((vote) => {
            if(!vote) {
            throw new NotFoundException("Vote not found");
            }
            return this.OptionService.findOne(voteId,optionId).then((option) => {
            if(!option) {
                throw new NotFoundException("Option not found");
            }
            const voteStudent = new VoteStudent();
            voteStudent.student = student;
            voteStudent.vote = vote;
            voteStudent.option = option.id;
            return this.VoteStudentRepository.save(voteStudent);
            });
        });
    }

);
  }


  findOne(voteID : string , studentID : string , restaurantID : string) {
    return this.VoteService.findOne(voteID).then((vote) => {
        if(!vote) {
            throw new NotFoundException("Vote not found");
        }
        return this.StudentService.findOne(studentID,restaurantID ).then((student) => {
            if(!student) {
                throw new NotFoundException("Student not found");
            }
            return this.VoteStudentRepository.findOne({
                where: {
                    vote: {
                        id: voteID
                    },
                    student: {
                        id: studentID
                    }
                }
            });
        });
    }
);
    }

}
