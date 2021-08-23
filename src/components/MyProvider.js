import MyContext from './MyContext';

class MyProvider extends Component {
    state = {
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        }
    };

    

    render() {

        const MyContext = React.createContext('NICE');

        return (
            <MyContext.Provider></MyContext.Provider>
        );
    }
}