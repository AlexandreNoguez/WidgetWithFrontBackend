import { MailAdapter } from '../adapters/mail-adapters';
import { FeedbackRepository } from '../repositories/feedbacks-repositories';

interface SubmitFeedbackUseCaseRequest{
    type: string;
    comment: string;
    screenshot: string;
}

export class SubmitFeedbackUseCase{
    constructor(
        private feedbacksRepository: FeedbackRepository,
        private mailAdapter: MailAdapter,
    ){}
    
    async execute(request: SubmitFeedbackUseCaseRequest){
        const { type, comment, screenshot } = request;

        if(!type){
            throw new Error('Type is required')
        }
        
        if(!comment){
            throw new Error('Comment is required')
        }

        if(screenshot && !screenshot.startsWith('data:image/png;based64')){
            throw new Error('Invalid format')
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [ 
                `<div style="font-family: sans-serif; font-size: 16px; color: #333;">`,
                `<p>Tipo do feedback ${type}</p>`,
                `<p>Comentário ${comment}</p>`,
                `</div>`
            ].join('\n')
        })
    }
}