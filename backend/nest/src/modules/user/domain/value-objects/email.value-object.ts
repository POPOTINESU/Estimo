import { Guard } from 'src/libs/guards';

type EmailProps = {
  email: string;
};

export class Email {
  readonly email: string;

  constructor(props: EmailProps) {
    this.validateProps(props);
    this.email = props.email;
  }

  private validateProps(props: EmailProps): void {
    const regex =
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

    if (!Guard.isEmpty(props.email)) {
      throw Error('email cannot empty');
    }
    if (!regex.test(props.email)) {
      throw Error('email format is not valid');
    }
  }
}
