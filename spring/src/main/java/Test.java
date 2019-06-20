import com.blockchain.exception.MyException;
import com.blockchain.gateway.HFClient;
import com.blockchain.model.HyperUser;
import com.blockchain.utils.FabricHelper;
import org.json.JSONObject;

public class Test {

    public static void main(String[] args) {
//        HFCAClient.createNewInstance();
//        EnrollmentRequest rr =  new EnrollmentRequest();
//        rr.setOrgName("Org1");
//        rr.setEnrollmentID("randy9");
//        rr.setEnrollmentSecret("123456");
//        Result result = HFCAUtils.enroll(rr);
//        System.out.println(result.getMsg());
        try {
            HyperUser user = FabricHelper.getMember("randy13", "Org1", null);
//            JSONObject rr2 = new JSONObject();
//            JSONObject selector = new JSONObject();
//            selector.put("data.id", "1");
//            rr2.put("selector", selector);
//            System.out.println(HFClient.query(user, rr2.toString(),"10","").getData());
            // Create a new file system based wallet for managing identities.
//            Path walletPath = Paths.get("wallet");
//            Wallet wallet = Wallet.createFileSystemWallet(walletPath);
//            Wallet.Identity identity1 = new WalletIdentity("Org1MSP1", user.getEnrollment().getCert(), user.getEnrollment().getKey());
//            System.out.println( wallet.exists("randy10"));
//            wallet.put("randy10",identity1);
//            // load a CCP
//            Path networkConfigPath = Paths.get("/opt/goworkspace/src/eju/qiushilian/fabric-java-SDK/demo/src/main", "resources", "connection.yaml");
//
//            Gateway.Builder builder = Gateway.createBuilder();
//            builder.networkConfig(networkConfigPath);
//            builder.identity(wallet,"randy10");
//            // create a gateway connection
//            try (Gateway gateway = builder.connect()) {
//                // get the network and contract
//                Network network = gateway.getNetwork("mychannel");
//                Contract contract = network.getContract("supervision");
//
////                args[0] = className;
////                args[1] = data[i].id;
////                let jsonObject = {
////                        "className": className,
////                        "key": args[1],
////                        "data": data[i]
////        };
////                args[2] = JSON.stringify(jsonObject);
////                args[3] = parentClassName;
////                args[4] = parentChaincodeName;
//                JSONObject rr = new JSONObject();
//                rr.put("className","farm");
//                rr.put("key","1");
//                JSONObject obj = new JSONObject();
//                obj.put("id","1");
//                obj.put("providerId","provider1");
//                obj.put("createDate","2019-06-18 00:00:00");
//                obj.put("batchNumber","CS007");
//                obj.put("productName","猪猪er号");
//                obj.put("productId","1");
//                rr.put("data",obj);
//
//                byte[] result = contract.submitTransaction("save", "farm", "1", rr.toString(),"","");
//                System.out.println(new String(result));
//
//                JSONObject rr2 = new JSONObject();
//                JSONObject selector = new JSONObject();
//                selector.put("data.id","1");
//                rr2.put("selector",selector);
////                {
////                    "selector":{
////                    "data.id":"1"
////                }
////                }
//                result = contract.evaluateTransaction("queryWithPagination",rr2.toString(),"10","");
//                System.out.println(new String(result));
//
//            } catch (Exception ex) {
//                ex.printStackTrace();
//            }
//        } catch (IOException e1) {
//            e1.printStackTrace();
//        } catch (GatewayException e1) {
//            e1.printStackTrace();
//        }  catch (Exception e) {
//            e.printStackTrace();
//        }
//        FabricHelper.getMember();
        } catch (MyException e) {
            e.printStackTrace();
        }
    }
}
