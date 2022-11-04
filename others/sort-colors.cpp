#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
  void sortColors(vector<int>& nums) {
    int p1 = 0, p2 = 0, p3 = nums.size() - 1;
    while (p3 >= p1) {
      if (nums.at(p1) == 0){
        int temp = nums.at(p1);
        nums.at(p1) = nums.at(p2);
        nums.at(p2) = temp;  
        p1++;
        p2++;
      }
      else if (nums.at(p1) == 2) {
        int temp = nums.at(p1);
        nums.at(p1) = nums.at(p3);
        nums.at(p3) = temp;
        p3--;
      }
      else {
        p1++;
      }
    }
  }
};

int main()
{
  Solution s;
  vector<int> a1 = {2, 0, 2, 1, 1, 0};
  vector<int> a2 = {2, 0, 1};
  s.sortColors(a1);
  s.sortColors(a2);
}