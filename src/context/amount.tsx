import { ReactNode, createContext, useState } from 'react';

const AmountContext = createContext(undefined as any);

export function AmountContextProvider({ children }: { children: ReactNode }) {
   let [amount, setamount] = useState<any>({
      1: { count: 0, amount: 0 },
   });

   // const handleAmount = function (id) {

   // };
   // //    useEffect(() => {
   // //       let hash: any = {};
   // //       for (let i = 0; i < cartState.length; i++) {
   // //          hash[cartState[i]] = { count: 0, amount: 0 };
   // //       }
   // //       console.log(hash);
   // //       setamount(hash);
   //    }, []);
   return <AmountContext.Provider value={{ amount, setamount }}>{children}</AmountContext.Provider>;
}

export default AmountContext;
