export class SignupInfoService {
  email: string;
  username: string;
  name: string;
  password: string;
  enable: boolean;
  dob: Date;
  phoneNumber: string;
  address: string;
  role: string;

  constructor(email: string, username: string, name: string, password: string,
              enable: boolean, dob: Date, phoneNumber: string, address: string, role: string) {
    this.email = email;
    this.username = username;
    this.name = name;
    this.password = password;
    this.enable = enable;
    this.dob = dob;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.role = role;
  }
}
