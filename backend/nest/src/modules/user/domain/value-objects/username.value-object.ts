import { Guard } from 'src/libs/guards';

type UserNameProps = {
  firstName: string;
  lastName: string;
};

export class UserName {
  private static readonly LEAST_FIRST_NAME: number = 1;
  private static readonly MOST_FIRST_NAME: number = 10;

  private static readonly LEAST_LAST_NAME: number = 1;
  private static readonly MOST_LAST_NAME: number = 10;

  readonly firstName: string;
  readonly lastName: string;

  /**
   * Description placeholder
   *
   * @private
   * @param {UserNameProps} props
   */
  constructor(props: UserNameProps) {
    this.validateProps(props);
    this.firstName = props.firstName;
    this.lastName = props.lastName;
  }

  private validateProps(props: UserNameProps): void {
    if (!Guard.isEmpty(props.firstName)) {
      throw new Error('First name cannot empty.');
    }
    if (
      !Guard.lengthIsBetween(
        props.firstName,
        UserName.LEAST_FIRST_NAME,
        UserName.MOST_FIRST_NAME,
      )
    ) {
      throw new Error(
        `First name must be between ${UserName.LEAST_FIRST_NAME} and ${UserName.MOST_FIRST_NAME} characters.`,
      );
    }

    if (!Guard.isEmpty(props.lastName)) {
      throw new Error('First name cannot empty.');
    }
    if (
      !Guard.lengthIsBetween(
        props.lastName,
        UserName.LEAST_LAST_NAME,
        UserName.MOST_LAST_NAME,
      )
    ) {
      throw new Error(
        `Last name must be between ${UserName.LEAST_LAST_NAME} and ${UserName.MOST_LAST_NAME} characters.`,
      );
    }
  }
}
