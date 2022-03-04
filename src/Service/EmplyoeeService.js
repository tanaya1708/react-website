import axios from 'axios';

class EmplyoeeService {

    fetchEmplyoee(){
        const EmplyoeeGet = axios.get("http://localhost:1001/emplyoee");
        return EmplyoeeGet;
    }

    addEmplyoee(emplyoee){
        const EmplyoeeAdd = axios.post("http://localhost:1001/insertemplyoee",emplyoee);
        return EmplyoeeAdd;

    }

    deleteEmplyoee(emp_id){
        const Emplyoeedel = axios.delete("http://localhost:1001/emplyoee"+'/'+ emp_id);
        return Emplyoeedel;
    }

    getEmplyoeeById(emp_id){
        const EmplyoeeId = axios.get("http://localhost:1001/emplyoee"+ '/'+ emp_id);
        return EmplyoeeId;
    }



}

export default new EmplyoeeService();