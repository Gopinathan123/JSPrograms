let counter=(function ()
    {
        let privateCounter=0
        function changeBy(val) {
            privateCounter+=val;
        }   return{
            increment(){
                chagneBy(1);
            }
        }
        return{
            decrement(){
                changeBy(-1)
            }
        }
        
    }
)