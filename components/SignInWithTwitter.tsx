import React, {FC} from 'react'
import { firebase } from '../src/utils/Firebase';

const SignInWithTwitter: FC = ({ children }) => {

  const signin = () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

    return (
        <button onClick={signin} className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-2 rounded-full select-none">
          { children }
        </button>
    );
} 

export default SignInWithTwitter;