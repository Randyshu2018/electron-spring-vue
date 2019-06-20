package com.blockchain.controller;

import com.blockchain.HFCAUtils;
import com.blockchain.controller.dto.InvokeRequest;
import com.blockchain.controller.dto.QueryRequest;
import com.blockchain.dto.BaseRequest;
import com.blockchain.dto.EnrollmentRequest;
import com.blockchain.exception.MyException;
import com.blockchain.gateway.HFClient;
import com.blockchain.model.HyperUser;
import com.blockchain.model.Result;
import com.blockchain.utils.FabricHelper;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @author shurenwei
 */
@RestController
@RequestMapping("/api")
public class MainController {

	private static final Logger logger = LoggerFactory.getLogger(MainController.class);

	/**
	 * Return the status as the particular user is enrolled
	 * @param enrollmentRequest
	 * @return the result object
	 */

	@RequestMapping(value = "/enroll", method = RequestMethod.POST)
	@ResponseBody
	public Result enroll(@RequestBody EnrollmentRequest enrollmentRequest, BindingResult bindingResult) {
		if(bindingResult.hasErrors()){
			return Result.getErrorInstance(bindingResult.getAllErrors().get(0).getDefaultMessage());
		}
		return HFCAUtils.enroll(enrollmentRequest);
	}

	/**
	 * Return the status as the particular user is enrolled
	 * @param request
	 * @return the result object
	 */

	@RequestMapping(value = "/userIsExist", method = RequestMethod.POST)
	@ResponseBody
	public Result userIsExist(@RequestBody BaseRequest request, BindingResult bindingResult) {
		if(bindingResult.hasErrors()){
			return Result.getErrorInstance(bindingResult.getAllErrors().get(0).getDefaultMessage());
		}
		return HFCAUtils.userIsExist(request);
	}

	/**
	 * Return the status as the particular user is enrolled
	 * @param request
	 * @return the result object
	 */

	@RequestMapping(value = "/invoke", method = RequestMethod.POST)
	@ResponseBody
	public com.blockchain.gateway.model.Result invoke(@RequestBody InvokeRequest request, BindingResult bindingResult) {
		try {
			HyperUser user = FabricHelper.getMember(request.getEnrollmentID(),request.getOrgName(),null);
			JSONObject rr = new JSONObject();
			JSONObject data = new JSONObject();
			for ( Map.Entry<String,String> entry:request.getData().entrySet()) {
				data.put(entry.getKey(),entry.getValue());
			}
			rr.put("className",request.getClassName());
			rr.put("key",request.getKey());
			rr.put("data",data);
			return HFClient.invoke(user,request.getClassName(),request.getKey(),rr.toString(),"","");
		} catch (MyException e) {
			e.printStackTrace();
			return com.blockchain.gateway.model.Result.getErrorInstance(com.blockchain.gateway.model.Result.FAIL);
		}
	}

	/**
	 * Return the status as the particular user is enrolled
	 * @param request
	 * @return the result object
	 */

	@RequestMapping(value = "/query", method = RequestMethod.POST)
	@ResponseBody
	public com.blockchain.gateway.model.Result query(@RequestBody QueryRequest request, BindingResult bindingResult) {
		try {
			HyperUser user = FabricHelper.getMember(request.getEnrollmentID(),request.getOrgName(),null);
			JSONObject rr = new JSONObject();
			JSONObject selector = new JSONObject();
			if(request.getSelector() != null){
				for ( Map.Entry<String,String> entry:request.getSelector().entrySet()) {
					selector.put(entry.getKey(),entry.getValue());
				}
				rr.put("selector",selector);
			}
			return HFClient.query(user,rr.toString(),"10000","");
		} catch (MyException e) {
			e.printStackTrace();
			return com.blockchain.gateway.model.Result.getErrorInstance(com.blockchain.gateway.model.Result.FAIL);
		}
	}



}
