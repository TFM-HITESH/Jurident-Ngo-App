import React from 'react';

type TestCardProps = {
    
};

const TestCard:React.FC<TestCardProps> = () => {
    
    return <div className='flex flex-col lg:flex-row bg-red-500 md:bg-green-500 lg:bg-blue-500 min-w-screen min-h-screen'>
        <div>
            Hi
        </div>
        <div>
            Hello
        </div>
    </div>
}
export default TestCard;