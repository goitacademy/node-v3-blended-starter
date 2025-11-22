import { Joi, Segments } from 'celebrate';

export const registerSchema = {
    [Segments.BODY]: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    })
}

