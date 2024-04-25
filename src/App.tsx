import { useEffect, useState } from 'react'
import './App.css'
import { Button, Divider, Dropdown, Flex, MenuProps, Space } from 'antd';
import React from 'react'
import { useTranslation } from 'react-i18next';

import { Col, Row } from 'antd';
import { CaretDownOutlined, CaretLeftOutlined, CaretRightOutlined, CaretUpOutlined, DownOutlined } from '@ant-design/icons';


function App() {
  const [arrary, setArray] = useState<React.JSX.Element[]>([]);
  const [i18nState, setI18n] =useState<string>('en');
  const [labelI18n, setLabelI18n] =useState<string>('EN');
  const {t, i18n } = useTranslation();
  
  
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e.key);
    if(e.key==='th'){
      setLabelI18n('TH')
    }else{
      setLabelI18n('EN')
    }
    setI18n(e.key)
  };
  
  const items: MenuProps['items'] = [
    {
      label: 'EN',
      key: 'en',
      
    },
    {
      label: 'TH',
      key: 'th',
    },
  ];
  
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const handleMoveShapeLeft = () => {
    const newItemOrder = [...arrary]; // คัดลอก array เพื่อป้องกันการเปลี่ยนแปลงต้นฉบับ
    const lastItem = newItemOrder.pop(); // นำข้อมูลสุดท้ายใน array ออกมาเก็บไว้ในตัวแปร lastItem
    newItemOrder.unshift(lastItem); // เพิ่มข้อมูลสุดท้ายที่เก็บไว้ลงไปที่ตำแหน่งแรกของ array
    console.log(newItemOrder); // ตรวจสอบ array ใหม่
    setArray(newItemOrder);
    console.log("Move shape");
  };
  
  const handleMoveShapeRight = () => {
    const newItemOrder = [...arrary]; // คัดลอก array เพื่อป้องกันการเปลี่ยนแปลงต้นฉบับ
    const firstItem = newItemOrder.shift(); // นำข้อมูลสุดเข้ามาใน array ออกมาเก็บไว้ในตัวแปร firstItem
    newItemOrder.push(firstItem); // เพิ่มข้อมูลที่เก็บไว้ข้างหน้าลงไปที่ตำแหน่งสุดท้ายของ array
    console.log(newItemOrder); // ตรวจสอบอาเรย์ใหม่
    setArray(newItemOrder);
    console.log("Move shape");
  };

  const handleMovePosition = () => {
    const newItemOrder = [...arrary]; // คัดลอก array เพื่อป้องกันการเปลี่ยนแปลงต้นฉบับ
    const firstItem1 = newItemOrder.slice(3); // นำข้อมูลสุดเข้ามาใน array ออกมาเก็บไว้ในตัวแปร firstItem
    console.log(firstItem1)
    const firstItem2 = newItemOrder.slice(0, newItemOrder.length - 3);
    console.log(firstItem2)
    const concatenatedArray = firstItem1.concat(firstItem2);
    setArray(concatenatedArray);
    console.log("Move position");
  };

  const handleRandomPosition = () => {
    const newItemOrder = [...arrary]; // คัดลอก array เพื่อป้องกันการเปลี่ยนแปลงต้นฉบับ
    newItemOrder.sort(() => Math.random() - 0.5);
    console.log(newItemOrder);
    setArray(newItemOrder);
  };

  useEffect(() => {
    const shape = [
      <div className='square custom-shape'></div>, 
      <div className='rectangle custom-shape'></div>, 
      <div className='circle custom-shape'></div>, 
      <div className='trapezoid custom-shape'></div>, 
      <div className='oval custom-shape'></div>, 
      <div className='parallelogram custom-shape'></div>
    ];
    setArray(shape);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(i18nState);
  }, [i18nState]);



  return (
    <>
     {/* <h1>{t('Welcome to React')}</h1> */}
    <div style={{ width: '100%' , height: '100%',justifyContent:'center'}}> 
    <Flex justify='end'>
    <Dropdown menu={menuProps}>
      <Button>
        <Space> 
          {labelI18n}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
    </Flex>
    
    <div>
    <Row justify="center">
      <Col span={8}>
        <Flex justify='end'>
        <div style={{ height: '190px',justifyItems:'center',textAlign: 'center' }}>
        <Button type="text"
        className='custom-button'
          style={{
            height: '150px', 
            width: '300px', 
            justifyContent: 'center', 
            textAlign: 'center', 
            backgroundColor: 'white' ,
            borderRadius:10,
            }}
            onClick={handleMoveShapeLeft}
            >
        <CaretLeftOutlined style={{fontSize:'140px' ,color: 'gray'}}/>
        </Button>
        <div style={{ position: 'relative' }}>
          <text style={{ position: 'absolute',transform: 'translateX(-50%)',height: 'auto', width: '100px',backgroundColor: '#6eda78',borderRadius: 10, marginTop: -10,color: 'white'}}>{t('button1')}</text>
        </div>
        <Divider></Divider>
        </div>
        </Flex>
        
      </Col>
      <Col span={8} > 
        <div style={{ height: '190px' ,justifyItems:'center',  textAlign: 'center' }}>
        <Button type="text" 
        className='custom-button'
        style={{height: '150px' ,
         width: '500px', 
         justifyContent: 'center', 
         textAlign: 'center', 
         backgroundColor: 'white',
         borderRadius:10}}
         onClick={handleMovePosition}>
        <CaretUpOutlined style={{fontSize:'170px', marginTop: -10,color: 'gray'}}/>
        <CaretDownOutlined style={{fontSize:'170px', marginTop: -10,color: 'gray'}}/>
        </Button>
        <div>
          <text style={{ position: 'absolute',transform: 'translateX(-50%)',height: 'auto', width: '100px',backgroundColor: '#6eda78',borderRadius: 10, marginTop: -10,color: 'white'}}>{t('button2')}</text>
        </div>
        <Divider></Divider>
      </div>
      </Col>
      <Col span={8}>
        <Flex justify='start'>
        <div style={{ height: '190px' , justifyContent: 'center', textAlign: 'center'}}>
        <Button type="text" 
        className='custom-button'
        style={{height: '150px' , 
        width: '300px', 
        justifyContent: 'center', 
        textAlign: 'center', 
        backgroundColor: 'white',
        borderRadius:10}}
        onClick={handleMoveShapeRight}
        >
        <CaretRightOutlined style={{fontSize:'140px',color: 'gray'}}/>
        </Button>
        <div>
          <text style={{ position: 'absolute',transform: 'translateX(-50%)',height: 'auto', width: '100px',backgroundColor: '#6eda78',borderRadius: 10, marginTop: -10,color: 'white'}}>{t('button1')}</text>
        </div>
        <Divider></Divider>
      </div>
        </Flex>
      </Col>
    </Row>

    <Row justify="center" >
      <Col span={8}>
      </Col>
      <Col span={4} > 
      <Flex justify='start'>
        <div style={{ height: '190px' , justifyContent: 'center', textAlign: 'center'}}>
        <Button 
        className='custom-button'
        onClick={handleRandomPosition}
        style={{height: '150px' , width: '250px', display: 'flex',justifyContent:'center',alignItems:'center', backgroundColor: 'white',borderRadius:10}}>
        {arrary[5]}
        </Button>
      </div>
        </Flex>
      </Col>
      <Col span={4}>
      <Flex justify='start'>
        <div style={{ height: '190px' , justifyContent: 'center', textAlign: 'center'}}>
        <Button 
        className='custom-button'
        onClick={handleRandomPosition}
        style={{height: '150px' , width: '250px', display: 'flex',justifyContent:'center',alignItems:'center', backgroundColor: 'white',borderRadius:10}}>
        {arrary[4]}
        </Button>
      </div>
        </Flex>
      </Col>
      <Col span={8}>
        <Flex justify='start'>
        <div style={{ height: '190px' , justifyContent: 'center', textAlign: 'center'}}>
        <Button 
        className='custom-button'
        onClick={handleRandomPosition}
        style={{height: '150px' , width: '300px',display: 'flex',justifyContent:'center',alignItems:'center', backgroundColor: 'white',borderRadius:10}}>
        {arrary[3]}
        </Button>
      </div>
        </Flex>
      </Col>
    </Row>

    <Row justify="center" style={{marginTop: -30}}>
      <Col span={4}>
      </Col>
      <Col span={4} > 
      <Flex justify='start'>
        <div style={{ height: '190px' , justifyContent: 'center', textAlign: 'center'}}>
        <Button 
        className='custom-button'
        onClick={handleRandomPosition}
        style={{height: '150px' , width: '250px', display: 'flex',justifyContent:'center',alignItems:'center', backgroundColor: 'white',borderRadius:10}}>
        {arrary[2]}
        </Button>
      </div>
        </Flex>
      </Col>
      <Col span={4}>
      <Flex justify='start'>
        <div style={{ height: '190px' , justifyContent: 'center', textAlign: 'center'}}>
        <Button 
        className='custom-button'
        onClick={handleRandomPosition}
        style={{height: '150px' , width: '250px', display: 'flex',justifyContent:'center',alignItems:'center', backgroundColor: 'white',borderRadius:10}}>
        {arrary[1]}
        </Button>
      </div>
        </Flex>
      </Col>
      <Col span={8}>
        <Flex justify='start'>
        <div style={{ height: '190px' , justifyContent: 'center', textAlign: 'center'}}>
        <Button 
        className='custom-button'
        onClick={handleRandomPosition}
        style={{height: '150px' , width: '300px', display: 'flex',justifyContent:'center',alignItems:'center', backgroundColor: 'white',borderRadius:10}}>
        {arrary[0]}
        </Button>
      </div>
        </Flex>
      </Col>
    </Row>
    </div>
    
    </div>
    
    </>
  )
}

export default App
