import React, {FC, useEffect, useContext} from 'react'
import Router from 'next/router';
import Head from 'next/head'
import { AuthContext } from '../src/context/Auth';
import { auth, firebase } from '../src/utils/Firebase';

const SignInWithTwitter: FC = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    currentUser && Router.push('/')
  }, [currentUser]);

  const signin = () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

    return (
        <div className="text-black">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-screen h-screen">
                <div className="container">
                    <button onClick={signin}>twitterでログインする</button>
                </div>
            </div>
        </div>
    );
} 

export default SignInWithTwitter;