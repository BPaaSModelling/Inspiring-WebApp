export class EndpointSettings {

  private static ENDPOINT       : string = 'http://localhost:8080';
  private static ADDQUESTION    : string = '/admin/question/add';
  private static GETQUESTIONS   : string = '/admin/question/list';

  public static getAddQuestionEndpoint():string {
    return EndpointSettings.ENDPOINT + EndpointSettings.ADDQUESTION;

    //http://localhost:8080/admin/question/add
  }


  public static getAllQuestionsEndpoint():string {
    return EndpointSettings.ENDPOINT + EndpointSettings.GETQUESTIONS;
  }


}
