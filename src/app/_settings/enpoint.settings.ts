export class EndpointSettings {

  private static ENDPOINT       : string = 'http://localhost:8080';
  private static ADDQUESTION    : string = '/admin/question/add';
  private static ADDPROVIDER    : string = '/admin/provider/add';

  private static GETQUESTIONS   : string = '/admin/question/list';
  private static UPDATEQUESTION  : string = '/admin/question/update';
  private static GETQUESTIONTYPE   : string = '/admin/question/types';

  private static DELETEQUESTION   : string = '/admin/question/delete';
  private static GETCOMPETENCES   : string = '/admin/provider/competences';
  private static GETITSOLUTIONS   : string = '/admin/provider/itsolution';
  private static GETPROVIDERS   : string = '/admin/question/list';



  public static getAddQuestionEndpoint():string {
    return EndpointSettings.ENDPOINT + EndpointSettings.ADDQUESTION;
  }

  public static getAddProviderEndpoint():string {
    return EndpointSettings.ENDPOINT + EndpointSettings.ADDPROVIDER;
  }

  public static getAllProvidersEndpoint():string {
    return EndpointSettings.ENDPOINT + EndpointSettings.GETPROVIDERS;
  }

  public static getQuestionsEndpoint():string {
    return EndpointSettings.ENDPOINT + EndpointSettings.GETQUESTIONS;
  }

  public static getUpdateQuestionEndpoint():string {
    return EndpointSettings.ENDPOINT + EndpointSettings.UPDATEQUESTION;
  }

  public static getQuestionTypeEndpoint():string {
    return EndpointSettings.ENDPOINT + EndpointSettings.GETQUESTIONTYPE;
  }

  public static getDeleteQuestionEndpoint():string {
    return EndpointSettings.ENDPOINT + EndpointSettings.DELETEQUESTION;
  }

  public static getAllCompetencesEndpoint():string{
    return EndpointSettings.ENDPOINT + EndpointSettings.GETCOMPETENCES;
  }

  public static getAllITSolutionsEndpoint():string{
    return EndpointSettings.ENDPOINT + EndpointSettings.GETITSOLUTIONS;
  }


}
