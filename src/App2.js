import { useEffect, useState } from "react";

const baseUrl = 'https://jsonplaceholder.typicode.com';

function App2() {
    // const [data, setData] = useState(null);

    // const fetchUrl = (type) => {
    //     fetch(baseUrl + '/' + type) //더미데이터를 반환해줌
    //     .then((res) => res.json())
    //     .then((res) => setData(res));
    // }

    // useEffect(() => {
    //     fetchUrl("users");
    // }, []); //빈 배열을 기입함으로써 최초 실행 1회만 실행될 수 있도록 설정.

    console.log(data);

    return (
        <div>
            <h1>useFetch</h1>
            <button onClick={() => fetchUrl("users")}>Users</button>
            <button onClick={() => fetchUrl("posts")}>Posts</button>
            <button onClick={() => fetchUrl("todos")}>Todos</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}


export default App2;