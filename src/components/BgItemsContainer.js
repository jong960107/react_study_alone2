import './BgItemsContainer.css'
import BgItemContainer from './BgItemContainer';
function BgItemsContainer(){
    const datas = [
        {title:'components',content:'React에서 컴포넌트는 재사용 가능한 UI 요소를 나타내는 작은 단위의 독립적인 블록입니다. 각 컴포넌트는 자체적으로 상태(state)와 속성(props)을 가지며, 가상 DOM(Virtual DOM)을 활용하여 성능을 최적화하고 UI를 구성합니다. 컴포넌트 기반 아키텍처로 애플리케이션을 구축하여 유지보수성과 확장성을 향상시킵니다.'},
        {title:'state',content:'React에서 상태(state)는 컴포넌트의 내부 데이터를 저장하고 관리하는 객체입니다. 상태는 컴포넌트가 렌더링될 때 변경 가능하며, `useState` 훅을 사용하여 함수형 컴포넌트에서도 상태를 관리할 수 있습니다. 상태의 변경은 `setState`를 호출하여 이루어지며, 변경된 상태는 자동으로 다시 렌더링되어 UI에 반영됩니다. 상태는 컴포넌트의 동적인 동작과 사용자 인터랙션에 사용됩니다.'},
        {title:'events',content:'React에서 이벤트(event)는 사용자의 상호작용을 감지하고 처리하는 함수를 호출하는 방법을 제공합니다. 이벤트는 UI 요소에서 발생하며, 컴포넌트에서 이벤트를 처리하기 위해 `onClick`, `onChange`, `onSubmit` 등의 이벤트 핸들러를 사용합니다. 이벤트 핸들러는 JSX에서 직접 정의되거나, 클래스 컴포넌트에서 메서드로 구현될 수 있으며, 사용자의 동작에 반응하여 컴포넌트의 상태를 변경하거나 다른 동작을 수행합니다.'},
    ];
    return (
        <div className="bgContainer">
            <div className='headerContainer'>
                    <h1>REACT IMPORTANT CONCEPTS</h1>
                    <h3>REACT PRACTICE 2</h3>
            </div> 
            <div className='contentContainer'>
                <div className='itemsContainer'>
                    <BgItemContainer title={datas[0].title} content={datas[0].content}></BgItemContainer>
                    <BgItemContainer title={datas[1].title} content={datas[1].content}></BgItemContainer>
                    <BgItemContainer title={datas[2].title} content={datas[2].content}></BgItemContainer>
                </div>
            </div>
        </div>
    )
};

export default BgItemsContainer;