/**
* This is a class for the Currency type.
* @author Varun Rao
* @version 1.0
* @since 16-02-2017
*/
export class Currency {
  code: string;
  name: string;
  constructor(code: string, name: string)
  {
    this.code=code;
    this.name=name;
  }
}
