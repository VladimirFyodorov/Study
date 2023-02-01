function isComplete(course: {name: string, lessons: string[]}): boolean {
  return course.lessons.length >= 4;
}
