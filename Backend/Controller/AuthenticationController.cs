using Backend.MLLayer

namespace Backend.controller{

    [Route("[controller]")]
    [ApiController]
    public class AuthenticationController:controller{
        public readonly DLAuthentication _DLAuthentication;

        public AuthenticationController(DLAuthentication dlAuthentication)
        {
           _DLAuthentication=dlAuthentication
        }

        [HttpPost("Login")]
        public DBReturnData Login([FromBody] MLAuthentication _MLAuthentication)=>TryExecute(()=> _DLAuthentication.Login(_MLAuthentication))
    }
}