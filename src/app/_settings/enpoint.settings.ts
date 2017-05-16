export class EndpointSettings {

  private static ENDPOINT       : string = 'http://localhost:8080';
  private static ADDQUESTION  : string = '/admin/question/add';

  public static getAddQuestionEndpoint() :string {
    return EndpointSettings.ENDPOINT + EndpointSettings.ADDQUESTION;

    //http://localhost:8080/admin/question/add
  }


}
