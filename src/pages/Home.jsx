import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { BsBoxSeam, BsShield, BsChatLeft } from 'react-icons/bs';
import {
  FiBarChart,
  FiCreditCard,
  FiShoppingCart,
  FiStar,
} from 'react-icons/fi';
import { HiOutlineRefresh } from 'react-icons/hi';
import { GoPrimitiveDot } from 'react-icons/go';
import { TiTick } from 'react-icons/ti';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoIosMore } from 'react-icons/io';

import StackedChart from '../components/StackedChart';
import DoughnutChart from '../components/DoughnutChart';

const Home = () => {
  return (
    <div className='mt-24'>
      <div className='flex flex-wrap justify-center'>
        <div className='bg-white rounded-xl w-full lg:w-80 p-8 m-3'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-500'>Earnings</p>
              <p className='text-2xl'>$63,448.78</p>
            </div>
            <button className='text-2xl bg-light-red opacity-0.9 text-white rounded-full  p-4'>
              <BsCurrencyDollar />
            </button>
          </div>
          <button className='bg-light-blue p-2 pl-3 pr-3 text-white rounded-md mt-4'>
            Download
          </button>
        </div>
        <div className='flex m-3 flex-wrap justify-center'>
          <div className='bg-white w-56 p-4 rounded-l-2xl border-r-1 border-color'>
            <button className='text-2xl text-light-blue bg-icon-light-blue opacity-0.9 rounded-full  p-4'>
              <MdOutlineSupervisorAccount />
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>39,354</span>
              <span className='text-sm text-red-500 ml-2'>-4%</span>
            </p>
            <p className='text-sm text-gray-500 mt-1'>Customers</p>
          </div>
          <div className='bg-white w-56 p-4 border-r-1 border-color'>
            <button className='text-2xl text-icon-light-orange bg-icon-light-orange opacity-0.9 rounded-full  p-4'>
              <BsBoxSeam />
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>39,354</span>
              <span className='text-sm text-red-500 ml-2'>-4%</span>
            </p>
            <p className='text-sm text-gray-500 mt-1'>Products</p>
          </div>{' '}
          <div className='bg-white w-56 p-4 border-r-1 border-color'>
            <button className='text-2xl text-icon-light-red bg-icon-light-red opacity-0.9 rounded-full  p-4'>
              <FiBarChart />
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>39,354</span>
              <span className='text-sm text-red-500 ml-2'>-4%</span>
            </p>
            <p className='text-sm text-gray-500 mt-1'>Sales</p>
          </div>
          <div className='bg-white w-56 p-4 rounded-r-2xl border-r-1 border-color'>
            <button className='text-2xl text-icon-light-green bg-icon-light-green opacity-0.9 rounded-full  p-4'>
              <HiOutlineRefresh />
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>39,354</span>
              <span className='text-sm text-red-500 ml-2'>-4%</span>
            </p>
            <p className='text-sm text-gray-500 mt-1'>Refunds</p>
          </div>
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white m-3 p-4 rounded-2xl w-780 '>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Products Performance</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-icon-light-red'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-icon-light-orange'>
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
                  <span className='p-1.5 rounded-full text-white bg-icon-green ml-3 text-xs'>
                    23%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
              </div>
              <div className='mt-8'>
                <p className='text-3xl font-semibold'>$93,438</p>

                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-10'>
                <button className='bg-light-blue p-2 pl-3 pr-3 text-white rounded-md mt-6'>
                  Download Report
                </button>
              </div>
            </div>
            <div>
              <StackedChart />
            </div>
          </div>
        </div>
        <div>
          <div className='bg-light-red rounded-xl w-400 p-8 m-3'>
            <div className='flex justify-between items-center '>
              <p className='font-semibold text-white text-2xl'>Earnings</p>
              <button className='text-2xl bg-light-blue  text-white rounded-full  p-3'>
                <BsCurrencyDollar />
              </button>
            </div>
            <p className='text-2xl text-white font-semibold mt-8'>$63,448.78</p>
            <p className='text-gray-200'>Monthly revenue</p>
          </div>

          <div className='bg-white rounded-xl w-400 p-8 m-3 flex justify-center items-center'>
            <div>
              <p className='text-2xl font-semibold '>43,246</p>
              <p className='text-gray-400'>Yearly sales</p>
            </div>

            <div>
              <DoughnutChart />
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-10 m-4 flex-wrap justify-center'>
        <div className='bg-white p-6 rounded-lg'>
          <p className='text-xl font-semibold'>Recent Transactions</p>
          <div className='mt-10 w-400'>
            <div className='flex justify-between'>
              <div className='flex gap-4'>
                <button className='text-2xl bg-icon-light-blue text-light-blue rounded-lg p-4'>
                  <BsCurrencyDollar />
                </button>
                <div>
                  <p className='text-md font-semibold'>Paypal Transfer</p>
                  <p className='text-sm text-gray-500'>Money Added</p>
                </div>
              </div>
              <p className='text-green-600'>+$350</p>
            </div>

            <div className='flex justify-between mt-4'>
              <div className='flex gap-4'>
                <button className='text-2xl bg-icon-light-green text-icon-light-green rounded-lg p-4'>
                  <BsShield />
                </button>
                <div>
                  <p className='text-md font-semibold'>Wallet</p>
                  <p className='text-sm text-gray-500'>Bill payment</p>
                </div>
              </div>
              <p className='text-red-600'>-$560</p>
            </div>

            <div className='flex justify-between mt-4'>
              <div className='flex gap-4'>
                <button className='text-2xl bg-icon-light-red text-icon-light-red rounded-lg p-4'>
                  <FiCreditCard />
                </button>
                <div>
                  <p className='text-md font-semibold'>Credit Card</p>
                  <p className='text-sm text-gray-500'>Money reversed</p>
                </div>
              </div>
              <p className='text-green-600'>+$350</p>
            </div>

            <div className='flex justify-between mt-4'>
              <div className='flex gap-4'>
                <button className='text-2xl bg-icon-light-orange text-icon-light-orange rounded-lg p-4'>
                  <TiTick />
                </button>
                <div>
                  <p className='text-md font-semibold'>Bank Transfer</p>
                  <p className='text-sm text-gray-500'>Money Added</p>
                </div>
              </div>
              <p className='text-green-600'>+$350</p>
            </div>

            <div className='flex justify-between mt-4'>
              <div className='flex gap-4'>
                <button className='text-2xl bg-icon-light-blue text-light-blue rounded-lg p-4'>
                  <BsCurrencyDollar />
                </button>
                <div>
                  <p className='text-md font-semibold'>Refund</p>
                  <p className='text-sm text-gray-500'>Payment Sent </p>
                </div>
              </div>
              <p className='text-red-600'>-$50</p>
            </div>
          </div>
          <div className='flex justify-between items-center mt-5 border-t-1 border-color'>
            <button className='bg-light-blue p-2 pl-3 pr-3 text-white rounded-md mt-4'>
              Add
            </button>
            <p className='text-gray-500 text-sm'>36 Recent Transactions</p>
          </div>
        </div>
        <div className='bg-white p-6 rounded-lg w-760'>
          <p className='text-xl font-semibold'>Products Performance</p>
          <div className='flex justify-between gap-10 mt-10 border-b-1 border-color pb-4'>
            <div className='flex gap-4 items-center'>
              <img
                className='rounded-lg w-20 h-18'
                src='https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s1.69341801.jpg'
                alt=''
              />
              <div>
                <p className='text-md font-semibold'>
                  Is it good butterscotch ice-cream?
                </p>
                <p className='text-sm text-gray-500'>Ice-Cream, Milk, Powder</p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div>
                <p className='text-md font-semibold'>Good</p>
                <p className='text-sm text-gray-500'>65% sold</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Earnings</p>
                <p className='text-md font-semibold'>$546,000</p>
              </div>
              <button className='text-xl text-gray-500'>
                <AiOutlineDelete />
              </button>
            </div>
          </div>
          <div className='flex justify-between mt-5 border-b-1 border-color pb-4'>
            <div className='flex gap-4 items-center'>
              <img
                className='rounded-lg w-20 h-18'
                src='https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s2.3260a3b5.jpg'
                alt=''
              />
              <div>
                <p className='text-md font-semibold'>
                  Supreme fresh tomato available
                </p>
                <p className='text-sm text-gray-500'>Market, Mall</p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div>
                <p className='text-md font-semibold'>Excellent</p>
                <p className='text-sm text-gray-500'>98% sold</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Earnings</p>
                <p className='text-md font-semibold'>$780,000</p>
              </div>
              <button className='text-xl text-gray-500'>
                <AiOutlineDelete />
              </button>
            </div>
          </div>

          <div className='flex justify-between mt-5 border-b-1 border-color pb-4'>
            <div className='flex gap-4 items-center'>
              <img
                className='rounded-lg w-20 h-18'
                src='https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s3.323ebcbe.jpg'
                alt=''
              />
              <div>
                <p className='text-md font-semibold'>
                  Red color candy from Gucci
                </p>
                <p className='text-sm text-gray-500'>Chocolate, Yummy</p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div>
                <p className='text-md font-semibold'>Average</p>
                <p className='text-sm text-gray-500'>46% sold</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Earnings</p>
                <p className='text-md font-semibold'>$457,000</p>
              </div>
              <button className='text-xl text-gray-500'>
                <AiOutlineDelete />
              </button>
            </div>
          </div>
          <div className='flex justify-between mt-5 border-b-1 border-color pb-4'>
            <div className='flex gap-4 items-center'>
              <img
                className='rounded-lg w-20 h-18'
                src='https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s4.f4c5d8f9.jpg'
                alt=''
              />
              <div>
                <p className='text-md font-semibold'>
                  Stylish night lamp for night
                </p>
                <p className='text-sm text-gray-500'>Elecric, Wire, Current</p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div>
                <p className='text-md font-semibold'>Poor</p>
                <p className='text-sm text-gray-500'>23% sold</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Earnings</p>
                <p className='text-md font-semibold'>$123,000</p>
              </div>
              <button className='text-xl text-gray-500'>
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-center'>
        <div className='w-400 bg-white rounded-lg p-6 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>Weekly Stats</p>
            <button className='text-xl font-semibold text-gray-500'>
              <IoIosMore />
            </button>
          </div>
          <div className='flex justify-between mt-10'>
            <div className='flex gap-4'>
              <button className='text-2xl bg-light-red text-white rounded-full p-3'>
                <FiShoppingCart />
              </button>
              <div>
                <p className='text-md font-semibold'>Top Sales</p>
                <p className='text-sm text-gray-500'>Johnathan Doe</p>
              </div>
            </div>
            <p className='text-red-600'>-$560</p>
          </div>

          <div className='flex justify-between mt-4'>
            <div className='flex gap-4'>
              <button className='text-2xl bg-orange text-white rounded-full p-3'>
                <FiStar />
              </button>
              <div>
                <p className='text-md font-semibold'>Best Seller</p>
                <p className='text-sm text-gray-500'>MaterialPro Admin</p>
              </div>
            </div>
            <p className='text-red-600'>-$560</p>
          </div>

          <div className='flex justify-between mt-4'>
            <div className='flex gap-4'>
              <button className='text-2xl bg-green-500 text-white rounded-full p-3'>
                <BsChatLeft />
              </button>
              <div>
                <p className='text-md font-semibold'>Most Commented</p>
                <p className='text-sm text-gray-500'>Ample Admin</p>
              </div>
            </div>
            <p className='text-red-600'>-$560</p>
          </div>
        </div>
        <div className='w-400 bg-white rounded-lg p-6 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>MedicalPro Branding</p>
            <button className='text-xl font-semibold text-gray-500'>
              <IoIosMore />
            </button>
          </div>
          <p className='text-md font-semibold rounded-lg w-32 bg-icon-light-orange py-0.5 px-2 text-icon-light-red mt-10'>
            16 APR, 2021
          </p>
          <div className='flex gap-4 border-b-1 border-color mt-6'>
            <div className='border-r-1 border-color pr-4 pb-2'>
              <p className='text-xs text-gray-500'>Due Date</p>
              <p className='text-sm'>Oct 23, 2021</p>
            </div>
            <div className='border-r-1 border-color pr-4 pb-2'>
              <p className='text-sm text-gray-500'>Due Date</p>
              <p className='text-sm'>Oct 23, 2021</p>
            </div>
            <div className='border-r-1 border-color pr-4 pb-2'>
              <p className='text-sm text-gray-500'>Due Date</p>
              <p className='text-sm'>Oct 23, 2021</p>
            </div>
          </div>
          <div className='border-b-1 border-color pb-4 mt-2'>
            <p className='text-md font-semibold mb-2'>Teams</p>

            <div className='flex gap-4'>
              <p className='bg-orange text-white py-0.5 px-3 rounded-lg text-xs'>
                Bootstrap
              </p>
              <p className='bg-red-500 text-white py-0.5 px-3 rounded-lg text-xs'>
                Angular
              </p>
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-md font-semibold mb-2'>Leaders</p>
            <div className='flex gap-4'>
              <img
                className='rounded-full w-8 h-8'
                src='data:image/jpeg;base64,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'
                alt=''
              />
              <img
                className='rounded-full w-8 h-8'
                src='data:image/jpeg;base64,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'
                alt=''
              />
              <img
                className='rounded-full w-8 h-8'
                src='data:image/jpeg;base64,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'
                alt=''
              />
              <img
                className='rounded-full w-8 h-8'
                src='data:image/jpeg;base64,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'
                alt=''
              />
            </div>
          </div>
          <div className='flex justify-between items-center mt-5 border-t-1 border-color'>
            <button className='bg-light-blue p-2 pl-3 pr-3 text-white rounded-md mt-4'>
              Add
            </button>
            <p className='text-gray-500 text-sm'>36 Recent Transactions</p>
          </div>
        </div>
        <div className='w-400 bg-white rounded-lg p-6 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>MedicalPro Branding</p>
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
              <p className='text-gray-500 '>By Johnathan Doe</p>
              <p className='mt-8 text-sm text-gray-500'>
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <button className='bg-light-blue p-2 pl-3 pr-3 text-white rounded-md mt-8'>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
