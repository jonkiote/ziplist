/**
 * E27 practice WOD
 * Created by Jonkiote on 9/19/2016.
 */

const myList1 = ['a','b','c'];
const myList2 = [1,2,3];

function zipList(nums, nums2){
  let sumList = [];
  for(let i = 0; i < nums.length; i++){
    sumList.push(nums[i],nums2[i]);
  }
  return sumList;
}
console.log(zipList(myList1, myList2));

function zipListTheSimpleWay(nums, nums2){
return _.flatten(_.zip(nums,nums2));
}
console.log(zipListTheSimpleWay(myList1, myList2));