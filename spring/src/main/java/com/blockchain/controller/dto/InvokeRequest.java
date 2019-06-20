package com.blockchain.controller.dto;

import com.blockchain.dto.BaseRequest;

import javax.validation.constraints.NotNull;
import java.util.Map;

public class InvokeRequest extends BaseRequest {

    private String className;

    private String key;
    @NotNull(message = "selector can not be null")
    private Map<String,String> data;

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public Map<String, String> getData() {
        return data;
    }

    public void setData(Map<String, String> data) {
        this.data = data;
    }
}
