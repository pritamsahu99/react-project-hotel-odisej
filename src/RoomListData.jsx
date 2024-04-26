import React from 'react';
import RoomCard from './RoomCard';

const RoomListData = () => {
  const roomsData = [
        {
          imgurl:
            "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/560/Classic-room-2-600x0.jpeg",
          title: "Classic Room",
          description: "Comfortable rooms with impressive views.",
          keyIndex:"01"
        },
        {
          imgurl:
            "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/532/Superior-room-1-600x0.jpeg",
          title: "Superior Room",
          description: "Comfortable rooms with impressive views.",
          keyIndex:"02"

        },
        {
          imgurl:
            "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/538/Deluxe-room-1-600x0.jpeg",
          title: "Delux Room",
          description: "Comfortable rooms with impressive views.",
          keyIndex:"03"

        },
        {
          imgurl:
            "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/542/Family-room-1-480x0.jpeg",
          title: "Family Room",
          description: "Comfortable rooms with impressive views.",
          keyIndex:"04"

        },
        {
          imgurl:
            "https://hotelodisej.com/wp-content/uploads/bf-advanced-images/552/Executive-suite-1-600x0.jpeg",
          title: "Executive Suite",
          description:
            "A glorious sweeping views of the Adriatic from your private balcony.",
          keyIndex:"05"

        },
  ];

  return (
    <div className='min-h-[80vh] w-[90%] m-auto mt-14 py-20'>
      {roomsData.map((obj, index) =>(<RoomCard key={index} values={obj}/>))}
    </div>
  )
}

export default RoomListData