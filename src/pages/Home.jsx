import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';

import Stacked from './Charts/Stacked';
import Doughnut from './Charts/Doughnut';
import { earningData, medicalproBranding, productsPerformance, recentTransactions, weeklyStats } from '../data/dummy';
import Button from '../components/Button';

// TODO: Indentation to the left
const Home = ({ currentColor, currentMode }) => (
    <div className='mt-24'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center '>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63,448.78</p>
            </div>
            <button
              style={{ backgroundColor: currentColor }}
              className='text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4'
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className='mt-3'>
            <Button
              color={'white'}
              bgColor={currentColor}
              text={'Download'}
              borderRadius={'md'}
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl '>
              <button
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400  mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  '>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Products Performance</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-icon-light-red hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-icon-light-orange hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className=' border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-icon-green ml-3 text-xs'>
                    23%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
              </div>
              <div className='mt-8'>
                <p className='text-3xl font-semibold'>$48,487</p>

                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-10'>
                <Button
                  color={'white'}
                  bgColor={currentColor}
                  text={'Download Report'}
                  borderRadius={'md'}
                />
              </div>
            </div>
            <div>
              <Stacked currentMode={currentMode} />
            </div>
          </div>
        </div>
        <div>
          <div
            className=' rounded-2xl md:w-400 p-8 m-3'
            style={{ backgroundColor: currentColor }}
          >
            <div className='flex justify-between items-center '>
              <p className='font-semibold text-white text-2xl'>Earnings</p>
              <button className='text-2xl bg-light-red hover:drop-shadow-xl text-white rounded-full  p-3'>
                <BsCurrencyDollar />
              </button>
            </div>
            <p className='text-2xl text-white font-semibold mt-8'>$63,448.78</p>
            <p className='text-gray-200'>Monthly revenue</p>
          </div>

          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center'>
            <div>
              <p className='text-2xl font-semibold '>43,246</p>
              <p className='text-gray-400'>Yearly sales</p>
            </div>

            <div>
              <Doughnut currentMode={currentMode} />
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-10 m-4 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl'>
          <p className='text-xl font-semibold'>Recent Transactions</p>
          <div className='mt-10 w-72 md:w-400'>
            {recentTransactions.map((item) => (
              <div className='flex justify-between mt-4'>
                <div className='flex gap-4'>
                  <button
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className='text-2xl rounded-lg p-4 hover:drop-shadow-xl'
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className='text-md font-semibold'>{item.title}</p>
                    <p className='text-sm text-gray-400'>{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className='flex justify-between items-center mt-5 border-t-1 border-color'>
            <div className='mt-3'>
              <Button
                color={'white'}
                bgColor={currentColor}
                text={'Add'}
                borderRadius={'md'}
              />
            </div>

            <p className='text-gray-400 text-sm'>36 Recent Transactions</p>
          </div>
        </div>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl md:w-760 overflow-auto'>
          <p className='text-xl font-semibold mb-10'>Products Performance</p>
          <div className='w-760 md:w-full overflow-auto'>
            {productsPerformance.map((item) => (
              <div className='flex justify-between gap-10 mt-4 border-b-1 border-color pb-4'>
                <div className='flex gap-4 items-center'>
                  <img
                    className='rounded-lg w-20 h-18'
                    src={item.image}
                    alt=''
                  />
                  <div>
                    <p className='text-md font-semibold'>{item.title}</p>
                    <p className='text-sm text-gray-400'>{item.desc}</p>
                  </div>
                </div>
                <div className='flex items-center gap-6'>
                  <div>
                    <p className='text-md font-semibold'>{item.rating}</p>
                    <p className='text-sm text-gray-400'>
                      {item.itemSold} sold
                    </p>
                  </div>
                  <div>
                    <p className='text-sm text-gray-400'>Earnings</p>
                    <p className='text-md font-semibold'>
                      {item.earningAmount}
                    </p>
                  </div>
                  <button className='text-xl text-gray-400'>
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-center'>
        <div className='w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>Weekly Stats</p>
            <button className='text-xl font-semibold text-gray-500'>
              <IoIosMore />
            </button>
          </div>

          <div className='mt-10 '>
            {weeklyStats.map((item) => (
              <div className='flex justify-between mt-4 w-full'>
                <div className='flex gap-4'>
                  <button
                    className={`text-2xl bg-${item.iconBg} hover:drop-shadow-xl text-white rounded-full p-3`}
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className='text-md font-semibold'>{item.title}</p>
                    <p className='text-sm text-gray-400'>{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>MedicalPro Branding</p>
            <button className='text-xl font-semibold text-gray-400'>
              <IoIosMore />
            </button>
          </div>
          <p className='text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-icon-light-orange py-0.5 px-2 text-icon-light-red mt-10'>
            16 APR, 2021
          </p>

          <div className='flex gap-4 border-b-1 border-color mt-6'>
            {medicalproBranding.data.map((item) => (
              <div className='border-r-1 border-color pr-4 pb-2'>
                <p className='text-xs text-gray-400'>{item.title}</p>
                <p className='text-sm'>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className='border-b-1 border-color pb-4 mt-2'>
            <p className='text-md font-semibold mb-2'>Teams</p>

            <div className='flex gap-4'>
              {medicalproBranding.teams.map((item) => (
                <p
                  className={`bg-${item.color} cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs`}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-md font-semibold mb-2'>Leaders</p>
            <div className='flex gap-4'>
              {medicalproBranding.leaders.map((item) => (
                <img className='rounded-full w-8 h-8' src={item.image} alt='' />
              ))}
            </div>
          </div>
          <div className='flex justify-between items-center mt-5 border-t-1 border-color'>
            <div className='mt-3'>
              <Button
                color={'white'}
                bgColor={currentColor}
                text={'Add'}
                borderRadius={'md'}
              />
            </div>

            <p className='text-gray-400 text-sm'>36 Recent Transactions</p>
          </div>
        </div>
        <div className='w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>Daily Activities</p>
            <button className='text-xl font-semibold text-gray-500'>
              <IoIosMore />
            </button>
          </div>
          <div className='mt-10'>
            <img
              className='w-96 h-50 '
              src='https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/blog-bg-2x.f6e9447d.jpg'
              alt=''
            />
            <div className='mt-8'>
              <p className='font-semibold text-lg'>React 18 coming soon!</p>
              <p className='text-gray-400 '>By Johnathan Doe</p>
              <p className='mt-8 text-sm text-gray-400'>
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className='mt-3'>
                <Button
                  color={'white'}
                  bgColor={currentColor}
                  text={'Read More'}
                  borderRadius={'md'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default Home;
