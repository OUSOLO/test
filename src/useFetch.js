//네트워크에서 데이터를 가져오게 해주는 hook
export function useFetch() {
    const [baseUrl, initialType] = useState(null);

    const fetchUrl = (type) => {
        fetch(baseUrl + '/' + type) //더미데이터를 반환해줌
        .then((res) => res.json())
        .then((res) => setData(res));
    }

    useEffect(() => {
        fetchUrl("users");
    }, []); //빈 배열을 기입함으로써 최초 실행 1회만 실행될 수 있도록 설정.
}




