using Backend.MLAuthentication;
using System.Data;

namespace Backend.DataLayer
{
    public class DLAuthentication
    {
        public DBReturnData Login(LoginCredential loginCredential)
        {
            DBReturnData dbReturnData = new();
            DataSet dataSet = new();

            try
            {
                using (DBAccess dbAccess = new DBAccess())
                {
                    dbAccess.DBProcedureName = "SP_Login";
                    dbAccess.AddParameters("@Username", loginCredential.Username);
                    dbAccess.AddParameters("@Password", loginCredential.Password);
                    dataSet = dbAccess.DBExecute();
                    dbAccess.Dispose();
                }

                if (dataSet != null && dataSet.Tables.Count > 0 && dataSet.Tables[0].Rows.Count > 0)
                {
                    dbReturnData.Dataset = dataSet;
                    dbReturnData.Status = DBEnums.Status.SUCCESS;
                    dbReturnData.Message = "Login successful.";
                    dbReturnData.Code = DBEnums.Codes.SUCCESS;
                }
                else
                {
                    dbReturnData.Status = DBEnums.Status.FAILURE;
                    dbReturnData.Message = "Invalid username or password.";
                    dbReturnData.Code = DBEnums.Codes.UNAUTHORIZED;
                }
            }
            catch (Exception ex)
            {
                dbReturnData.Status = DBEnums.Status.FAILURE;
                dbReturnData.Message = "Login failed: " + ex.Message;
                dbReturnData.Code = DBEnums.Codes.INTERNAL_SERVER_ERROR;
            }

            return dbReturnData;
        }
    }
}