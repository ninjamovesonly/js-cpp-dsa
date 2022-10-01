public boolean isValidPath(int[][] grid, int numRobots) {
  int rawRobots = 0;
  for(int i=0; i<grid[0].lenghth; i++) {
    if(grid[i] == 1) {
      rawRobots++;
    }
  }

  if(rawRobots != numRobots) {
    return false;
  }

  for(int row=1; i<grid.lenghth; i++) {
    int 
  }
}

class Solution{
   public boolean checkGrid(int robots, int[][] grid){
      Map<Integer, ArrayList<Integer>> map = new HashMap<>();
      
      for(int i = 0; i < grid[0].length; i++){
         int num = grid[0][i];
         if(num == 1){
           if(map.contains(num)){
              map.put(num, map.get(num).add(i));
           }else{
              map.put(num, new ArrayList<>();
              map.put(num, i);
           }
         }
      }
      
      int c = 0;
      for(int i = 1; i < grid.length; i++){
        int k = 0;
        int[] currArr = grid[i];
        ArrayList<Integer> mapList = map.get(1);   //[0, 3]
        
        while(k < currArr.length){
          if(curr[k] == 1){
             if(c >=  mapList.size()){
                return false;
                break;
             }
             
             if(Math.abs(currArr[k] - mapList.get(c)) == 1){
              //update the mapList
                mapList.get(1).replace(c, k);
                k++; c++;
             }else{
                return false;
                break;
             }
          }
           
        }
      }
      
      return true;
   }
}