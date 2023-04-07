export const lengthTextSubstr={
  methods:{
    lengthTextSubstr(){
    if (this.text.length >= 20) {
           setTimeout(()=>{
this.text = this.text.substring(0,20);
           }, 1000) 
            }
    },
  }
}