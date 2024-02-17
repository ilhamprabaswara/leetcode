function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1: number = m - 1;  // Pointer for the end of actual elements in nums1
    let p2: number = n - 1;  // Pointer for the end of nums2
    let p: number = m + n - 1;  // Pointer for the end of the total length of nums1

    // Merge in reverse order
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // Handle remaining elements in nums2
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p--;
        p2--;
    }
}

const nums1: number[] = [1, 2, 3, 0, 0, 0];
const m: number = 3;
const nums2: number[] = [2, 5, 6];
const n: number = 3;
merge(nums1, m, nums2, n);
console.log(nums1);