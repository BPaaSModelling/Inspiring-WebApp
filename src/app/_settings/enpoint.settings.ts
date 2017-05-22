export class EndpointSettings {

  private static ENDPOINT       : string = 'http://localhost:8080';
  private static ADDQUESTION    : string = '/admin/question/add';
  private static ADDPROVIDER    : string = '/admin/provider/add';

  private static GETQUESTIONS   : string = '/admin/question/list';
  private static GETCOMPETENCES   : string = '/admin/provider/competences';
  private static GETITSOLUTIONS   : string = '/admin/provider/itsolution';


  public static getAddQuestionEndpoint():string {
    return EndpointSettings.ENDPOINT + EndpointSettings.ADDQUESTION;
  }

  public static getAddProviderEndpoint():string {
    return EndpointSettings.ENDPOINT + EndpointSettings.ADDPROVIDER;
  }

  public static getAllQuestionsEndpoint():string {
    return EndpointSettings.ENDPOINT + EndpointSettings.GETQUESTIONS;
  }

  public static getAllCompetencesEndpoint():string{
    return EndpointSettings.ENDPOINT + EndpointSettings.GETCOMPETENCES;
  }

  public static getAllITSolutionsEndpoint():string{
    return EndpointSettings.ENDPOINT + EndpointSettings.GETITSOLUTIONS;
  }


}
