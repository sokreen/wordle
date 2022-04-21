#include <stdio.h>
#include <stdlib.h>

int main(int argc, char const *argv[]) {
  int a = atoi(argv[1]);
  while (a > 0) {
    printf("%d\n", a % 10);
    a /= 10;
  }
  printf("\n");
  return 0;
}
