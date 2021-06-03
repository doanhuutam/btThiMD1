function checK(a,b) {


    if (a == 0) {
        if (b == 0) {
            document.write('phương trình có vô số nghiệm')
        } else {
            document.write('phương trình  vô  nghiệm')
        }
    } else {
        let x=-b/a
        document.write('phương trình có nghiệm là'+x)
    }
}
checK(5,8);