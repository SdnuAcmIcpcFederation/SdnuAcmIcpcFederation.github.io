### 标准库函数

#### C标准库

- `strlen(const char *str)`：返回从 `str[0]` 开始直到 `'\0'` 的字符数。注意，未开启 O2 优化时，该操作写在循环条件中复杂度是 $\Theta(N)$ 的。
- `printf("%s", s)`：用 `%s` 来输出一个字符串（字符数组）。
- `scanf("%s", &s)`：用 `%s` 来读入一个字符串（字符数组）。
- `sscanf(const char *__source, const char *__format, ...)`：从字符串 `__source` 里读取变量，比如 `sscanf(str,"%d",&a)`。
- `sprintf(char *__stream, const char *__format, ...)`：将 `__format` 字符串里的内容输出到 `__stream` 中，比如 `sprintf(str,"%d",i)`。
- `strcmp(const char *str1, const char *str2)`：按照字典序比较 `str1 str2` 若 `str1` 字典序小返回负值，两者一样返回 0，`str1` 字典序更大则返回正值。请注意，不要简单的认为返回值只有 $0$，$1$，$-1$ 三种，在不同平台下的返回值都遵循正负，但并非都是 $0$，$1$，$-1$。
- `strcpy(char *str, const char *src)`: 把 `src` 中的字符复制到 `str` 中，`str`  `src` 均为字符数组头指针，返回值为 `str` 包含空终止符号 `'\0'`。
- `strncpy(char *str, const char *src, int cnt)`：复制至多 `cnt` 个字符到 `str` 中，若 `src` 终止而数量未达 `cnt` 则写入空字符到 `str` 直至写入总共 `cnt` 个字符。
- `strcat(char *str1, const char *str2)`: 将 `str2` 接到 `str1` 的结尾，用 `*str2` 替换 `str1` 末尾的 `'\0'` 返回 `str1`。
- `strstr(char *str1, const char *str2)`：若 `str2` 是 `str1` 的子串，则返回 `str2` 在 `str1` 的首次出现的地址；如果 `str2` 不是 `str1` 的子串，则返回 `NULL`。
- `strchr(const char *str, int c)`：找到在字符串 `str` 中第一次出现字符 `c` 的位置，并返回这个位置的地址。如果未找到该字符则返回 `NULL`。
- `strrchr(const char *str, char c)`：找到在字符串 `str` 中最后一次出现字符 `c` 的位置，并返回这个位置的地址。如果未找到该字符则返回 `NULL`。

#### C++标准库(string)

- 构造函数
  string 类有多个构造函数，用法示例如下：

```cpp
string s1();  // si = ""
string s2("Hello");  // s2 = "Hello"
string s3(4, 'K');  // s3 = "KKKK"
string s4("12345", 1, 3);  //s4 = "234"，即 "12345" 的从下标 1 开始，长度为 3 的子串
```

- 对 string 对象赋值
  可以用 char\* 类型的变量、常量，以及 char 类型的变量、常量对 string 对象进行赋值。
  string 类还有 assign 成员函数，可以用来对 string 对象赋值。assign 成员函数返回对象自身的引用。

```cpp
string s1("12345"), s2;
s3.assign(s1);  // s3 = s1
s2.assign(s1, 1, 2);  // s2 = "23"，即 s1 的子串(1, 2)
s2.assign(4, 'K');  // s2 = "KKKK"
s2.assign("abcde", 2, 3);  // s2 = "cde"，即 "abcde" 的子串(2, 3)
```

- 求字符串的长度
  length 成员函数返回字符串的长度。size 成员函数可以实现同样的功能。
- string对象中字符串的连接
  除了可以使用+和+=运算符对 string 对象执行字符串的连接操作外，string 类还有 append 成员函数，可以用来向字符串后面添加内容。append 成员函数返回对象自身的引用。

```cpp
string s1("123"), s2("abc");
s1.append(s2);  // s1 = "123abc"
s1.append(s2, 1, 2);  // s1 = "123abcbc"
s1.append(3, 'K');  // s1 = "123abcbcKKK"
s1.append("ABCDE", 2, 3);  // s1 = "123abcbcKKKCDE"，添加 "ABCDE" 的子串(2, 3)
```

- string对象的比较
  除了可以用 <、<=、==、!=、>=、> 运算符比较 string 对象外，string 类还有 compare 成员函数，可用于比较字符串。compare 成员函数有以下返回值：
  小于 0 表示当前的字符串小；
  等于 0 表示两个字符串相等；
  大于 0 表示另一个字符串小。
- 求 string 对象的子串
  substr 成员函数可以用于求子串 (n, m)，原型如下：

```cpp
string substr(int n = 0, int m = string::npos) const;
```

- 交换两个string对象的内容
  swap 成员函数可以交换两个 string 对象的内容。
- 查找子串和字符
  string 类有一些查找子串和字符的成员函数，它们的返回值都是子串或字符在 string 对象字符串中的位置（即下标）。如果查不到，则返回 string::npos。string: :npos 是在 string 类中定义的一个静态常量。这些函数如下：
  find：从前往后查找子串或字符出现的位置。
  rfind：从后往前查找子串或字符出现的位置。
  find_first_of：从前往后查找何处出现另一个字符串中包含的字符。例如：
  s1.find_first_of("abc");  //查找s1中第一次出现"abc"中任一字符的位置
  find_last_of：从后往前查找何处出现另一个字符串中包含的字符。
  find_first_not_of：从前往后查找何处出现另一个字符串中没有包含的字符。
  find_last_not_of：从后往前查找何处出现另一个字符串中没有包含的字符。
- 替换子串
  replace 成员函数可以对 string 对象中的子串进行替换，返回值为对象自身的引用。