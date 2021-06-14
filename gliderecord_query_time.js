var start = new GlideDateTime();

for (var loop =0; loop < 100000; loop +=1){
}

var end = new GlideDateTime();

var milliseconds = end.getNumericValue() - start.getNumericValue();
gs.print("start time   - " + start.getNumericValue());
gs.print("end time     - " + end.getNumericValue());
gs.print("milliseconds - " + milliseconds)