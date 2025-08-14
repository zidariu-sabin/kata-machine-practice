export default class MinHeap {
    public length: number;
    private data: number[];
    

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value
        this.heapifyUp(this.length)
        this.length++
}
    delete(): number | undefined {
    //remove head element, take last element in array, put it in first and heapify down 
        if(this.length === 0 ) return undefined
        const value = this.data[0];

        if(this.length === 1 ){
            this.data = [];
            this.length = 0;
            return value;
        }
        this.length--;
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return value;
    }
    private parent(idx: number): number {
        return Math.floor((idx-1)/2);
    }

    private leftChild(idx: number): number {
        return idx*2+1;
    }

    private rightChild(idx: number): number {
        return idx*2+2;
    }
    
    private heapifyUp(idx: number): void{
        if (idx === 0){
            return;
        }

        const p = this.parent(idx);
        const parentV = this.data[p];
        const v = this.data[idx];

        if(parentV > v){
            this.data[idx] = parentV;
            this.data[p] = v;
            return(this.heapifyUp(p));
        }
    }

    private heapifyDown(idx: number): void{
        //find minimum child
        if(idx >= this.length){
            return;
        }

        const lIdx = this.leftChild(idx)
        const rIdx = this.rightChild(idx)

        if(lIdx >= this.length){
            return
        }

        //comparison
        const lV = this.data[lIdx];
        const rV = this.data[rIdx];
        const v = this.data[idx];

        if(lV > rV && v > rV){
            this.data[rIdx] = v;
            this.data[idx] = rV ;
            this.heapifyDown(rIdx);
        } else if(rV > lV && v > lV){
            this.data[lIdx] = v;
            this.data[idx] = lV ;
            this.heapifyDown(lIdx);
        } else if (lV === rV && v > lV) {
            this.data[rIdx] = v;
            this.data[idx] = rV ;
            this.heapifyDown(rIdx);    
        }
        //swap
    }
}