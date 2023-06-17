import { Link} from 'react-router-dom';
import errorImg from '../../public/images/404.gif'  

const ErrorElement = () => {

    return (
        <div className="px-5">
            <div className="flex justify-center items-center w-full h-[100vh]">
                <div className="">
                   <img src={errorImg} alt="" className='lg:w-[60%] w-full mx-auto' />
                   <div className='text-center mt-10'>
                      <Link className='text-[20px] font-bold bg-[#eacda3] px-8 py-3 rounded-lg' to="/">Go Back To Home</Link>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;