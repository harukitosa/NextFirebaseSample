import React, {FC, useContext} from 'react'
import Head from 'next/head'
import { AuthContext } from '../src/context/Auth';
import SignInWithTwitter from '../components/SignInWithTwitter'

const Home: FC = () => {
  const { currentUser } = useContext(AuthContext);
  return (
        <div className="text-black">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-screen h-screen">
                { currentUser !== undefined &&
                    <SignInWithTwitter>
                        twitterでログインする
                    </SignInWithTwitter>
                }
            </div>
        </div>
  );
} 

export default Home;