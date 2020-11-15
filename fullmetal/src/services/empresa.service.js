import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/auth';

class EmpresaService{

    createEmpresa(empresa){
        return axios.post(url+'/create',empresa)
            .then(res=>{ return res; })
            .catch(error=>{ console.error(error); return error; });
    }

}

export default new EmpresaService();