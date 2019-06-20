package com.blockchain.controller.dto;

import com.blockchain.dto.BaseRequest;
import org.json.JSONObject;

import javax.validation.constraints.NotNull;
import java.util.Map;

public class QueryRequest extends BaseRequest {
    @NotNull(message = "selector can not be null")
    private Map<String,String> selector;

    public Map<String,String> getSelector() {
        return selector;
    }

    public void setSelector(Map<String,String> selector) {
        this.selector = selector;
    }
}
