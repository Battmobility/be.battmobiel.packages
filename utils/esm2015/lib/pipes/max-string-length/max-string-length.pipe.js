import { Pipe } from '@angular/core';
export class MaxStringLengthPipe {
    // we use word.normalize('NFC') instead of Array.form because of other characters
    // wouldn't be sliced correctly. See test for examples of characters
    transform(word, maxLength = 50) {
        if (!!word) {
            const normalizedWord = word.normalize('NFC');
            return normalizedWord.length >= maxLength
                ? normalizedWord.slice(0, maxLength) + '…'
                : word;
        }
        return word;
    }
}
MaxStringLengthPipe.decorators = [
    { type: Pipe, args: [{
                name: 'sofMaxStringLength'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LXN0cmluZy1sZW5ndGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZmljby1mcmFtZXdvcmsvdXRpbHMvc3JjL2xpYi9waXBlcy9tYXgtc3RyaW5nLWxlbmd0aC9tYXgtc3RyaW5nLWxlbmd0aC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsaUZBQWlGO0lBQ2pGLG9FQUFvRTtJQUNwRSxTQUFTLENBQUMsSUFBWSxFQUFFLFlBQW9CLEVBQUU7UUFDNUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO1lBQ1YsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxPQUFPLGNBQWMsQ0FBQyxNQUFNLElBQUksU0FBUztnQkFDdkMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEdBQUc7Z0JBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDVjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBZEYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxvQkFBb0I7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3NvZk1heFN0cmluZ0xlbmd0aCdcbn0pXG5leHBvcnQgY2xhc3MgTWF4U3RyaW5nTGVuZ3RoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvLyB3ZSB1c2Ugd29yZC5ub3JtYWxpemUoJ05GQycpIGluc3RlYWQgb2YgQXJyYXkuZm9ybSBiZWNhdXNlIG9mIG90aGVyIGNoYXJhY3RlcnNcbiAgLy8gd291bGRuJ3QgYmUgc2xpY2VkIGNvcnJlY3RseS4gU2VlIHRlc3QgZm9yIGV4YW1wbGVzIG9mIGNoYXJhY3RlcnNcbiAgdHJhbnNmb3JtKHdvcmQ6IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIgPSA1MCk6IHN0cmluZyB7XG4gICAgaWYgKCEhd29yZCkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZFdvcmQgPSB3b3JkLm5vcm1hbGl6ZSgnTkZDJyk7XG4gICAgICByZXR1cm4gbm9ybWFsaXplZFdvcmQubGVuZ3RoID49IG1heExlbmd0aFxuICAgICAgICA/IG5vcm1hbGl6ZWRXb3JkLnNsaWNlKDAsIG1heExlbmd0aCkgKyAn4oCmJ1xuICAgICAgICA6IHdvcmQ7XG4gICAgfVxuICAgIHJldHVybiB3b3JkO1xuICB9XG59XG4iXX0=