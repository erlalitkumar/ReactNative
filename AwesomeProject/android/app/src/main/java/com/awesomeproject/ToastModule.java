package com.awesomeproject;

import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.HashMap;
import java.util.Map;

public class ToastModule extends ReactContextBaseJavaModule {

  public static String LENGTH_LONG = "LENGTH_LONG";
  public static String LENGTH_SHORT = "LENGTH_SHORT";

  public ToastModule(
      @NonNull ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Nullable
  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put("PI","3.1416");
    constants.put(LENGTH_LONG,Toast.LENGTH_LONG);
    constants.put(LENGTH_SHORT,Toast.LENGTH_SHORT);
    return constants;
  }

  @NonNull
  @Override
  public String getName() {
    return "ToastModule";
  }

  @ReactMethod
  public void showText(String message, int duration) {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
  }
}
