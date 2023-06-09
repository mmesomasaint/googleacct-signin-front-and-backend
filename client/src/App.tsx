import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import logo from './assets/google.png'
import { IoMdArrowDropdown } from 'react-icons/io'
import EmailHeader from './components/EmailHeader'
import EmailBody from './components/EmailBody'
import PasswordHeader from './components/PasswordHeader'
import PasswordBody from './components/PasswordBody'
import Loader from './components/Loader'
import LoggedIn from './components/LoggedIn'

function App() {
  const queryClient = new QueryClient()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [userId, setUserId] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const passBack: (id: string, email: string) => void = (id, email) => {
    setUserId(id)
    setEmail(email)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className='pt-14 max-w-lg sm:max-w-[29.5rem] w-[95%] mx-auto'>
        {email && password ? (
          <LoggedIn />
        ) : (
          <>
            <main className='scale-95'>
              <div className='relative py-6 px-10 rounded-lg border border-gray-300 bg-white overflow-hidden'>
                <Loader isLoading={isLoading} />
                <div className='flex flex-col items-center mb-10'>
                  <img src={logo} className='w-[4.5rem]' />
                  {userId ? <PasswordHeader email={email} /> : <EmailHeader />}
                </div>
                <div className='flex overflow-x-hidden pt-3'>
                  <div
                    className={`${
                      userId ? '-translate-x-[101%]' : 'translate-x-0'
                    } w-full flex-shrink-0 transition-transform ease-in-out duration-500`}
                  >
                    <EmailBody
                      setIsLoading={setIsLoading}
                      passBack={passBack}
                    />
                  </div>
                  <div
                    className={`${
                      userId ? '-translate-x-full' : 'translate-x-1'
                    } w-full flex-shrink-0 transition-transform ease-in-out duration-500`}
                  >
                    <PasswordBody
                      userId={userId}
                      setIsLoading={setIsLoading}
                      passPassword={setPassword}
                    />
                  </div>
                </div>
              </div>
            </main>
            <footer className='w-[90%] mx-auto my-2 px-2 flex justify-between items-center gap-5'>
              <div className='flex justify-between items-center gap-5'>
                <span className='text-xs'>English (United Kingdom)</span>
                <IoMdArrowDropdown className='text-lg text-black' />
              </div>
              <div className='flex justify-start gap-7 items-center'>
                <p className='text-xs'>Help</p>
                <p className='text-xs'>Privacy</p>
                <p className='text-xs'>Terms</p>
              </div>
            </footer>
          </>
        )}
      </div>
    </QueryClientProvider>
  )
}

export default App
