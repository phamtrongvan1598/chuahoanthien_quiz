export class SignupInfoService {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  enable: boolean;
  dob: Date;
  phoneNumber: string;
  address: string;
  role: string;

  constructor(email: string, username: string, firstName: string, lastName: string, password: string,
              enable: boolean, dob: Date, phoneNumber: string, address: string, role: string) {
    this.email = email;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.enable = enable;
    this.dob = dob;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.role = role;
  }
}
