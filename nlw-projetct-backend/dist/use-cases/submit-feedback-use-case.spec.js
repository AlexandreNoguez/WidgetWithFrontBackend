"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: sendMailSpy });
describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemple test',
            screenshot: 'data:image/png;based64,e09fj-0e98g243thn',
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it('should not be able to submit a feedback without a type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'exemple test',
            screenshot: 'data:image/png;based64,e09fj-0e98g243thn',
        })).rejects.toThrow();
    });
    it('should not be able to submit a feedback without a comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;based64,e09fj-0e98g243thn',
        })).rejects.toThrow();
    });
    it('should not be able to submit a feedback without an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Bugou!',
            screenshot: 'dhn',
        })).rejects.toThrow();
    });
});
