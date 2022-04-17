import React, { useEffect} from 'react';
import googleIcon from "../../../images/icon/googleIcon.png";
import './SocialLogin.css';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if(googleUser) {
            navigate(from, { replace: true });
        }
    },[googleUser, navigate, from]);

    if(googleLoading){
        return <Loading></Loading>
    }

    if(googleError) {
        toast(googleError?.message);
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-brand m-2' style={{height:'1px'}}></div>
                <p className='mt-2 pt-2'>Or</p>
                <div className='bg-brand m-2' style={{height:'1px'}}></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='d-block mx-auto my-1 brand-btn google-btn'>
                   <img src={googleIcon} alt="google-logo" style={{width: "25px", marginRight: '4px'}} /> Sign In with Google
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SocialLogin;