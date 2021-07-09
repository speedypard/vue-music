import {
  Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure,
} from 'vee-validate';
import {
  required, min, max, alpha_spaces as alphaspaces, email,
  min_value as minVal, max_value as maxVal, confirmed,
  not_one_of as excluded,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaspaces);
    defineRule('email', email);
    defineRule('min_value', minVal);
    defineRule('max_value', maxVal);
    defineRule('password_mismatch', confirmed);
    defineRule('excluded', excluded);
    defineRule('country_excluded', excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          alpha_spaces: `The field ${ctx.field} only support alphabetical characters and space.`,
          email: 'invalid email',
          min_value: `The field ${ctx.field} is too low.`,
          max_value: `The field ${ctx.field} is too high.`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
          country_excluded: 'Due to the restrictions, We cannot provide our service to your location.',
          password_mismatch: "The password doesn't match.",
          tos: 'You must accept the Terms of Service.',
        };
        const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The field ${ctx.field} is invalid.`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
